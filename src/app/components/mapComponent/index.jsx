import React, { useEffect, useRef, useState } from "react";
import Map from "ol/Map";
import View from "ol/View";
import OSM from "ol/source/OSM";
import VectorSource from "ol/source/Vector";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import Draw from "ol/interaction/Draw";
import "ol/ol.css";
import Polygon from "ol/geom/Polygon";
import LineString from "ol/geom/LineString";
import { getArea, getLength } from "ol/sphere";
import millify from "millify";
import Feature from "ol/Feature";
import Geometry from "ol/geom/Geometry";
import XYZ from "ol/source/XYZ";
import { fromLonLat } from "ol/proj";
import { Style, Stroke, Fill, Circle } from "ol/style";


const MapComponent = () => {
    const mapRef = useRef(null);
    const [map, setMap] = useState();
    const [source] = useState(new VectorSource({ wrapX: false }));
    const [drawType, setDrawType] = useState("LineString");
    const [lastFeature, setLastFeature] = useState(null);
    const [measurement, setMeasurement] = useState("");

    useEffect(() => {
        // Replace your current rasterLayer with this:
        const rasterLayer = new TileLayer({
            source: new XYZ({
                url: 'https://{a-d}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
                attributions: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
            })
        });

        // Create custom style for your brand color
        const customStyle = new Style({
            stroke: new Stroke({
                color: '#c1a9f4',
                width: 1
            }),
            fill: new Fill({
                color: 'rgba(193, 169, 244, 0.1)' // Semi-transparent version of your color
            })
        });


        const vectorLayer = new VectorLayer({
            source,
            style: customStyle // Apply the custom style
        });

        const newMap = new Map({
            target: mapRef.current,
            layers: [rasterLayer, vectorLayer],
            view: new View({
                center: fromLonLat([78.9629, 20.5937]),
                zoom: 5,
            }),
        });

        setMap(newMap);

        return () => newMap.setTarget(undefined);
    }, []);

    useEffect(() => {
        if (!map || drawType === "None") return;

        const drawInteraction = new Draw({
            source,
            type: drawType,
        });

        map.addInteraction(drawInteraction);

        drawInteraction.on("drawend", (event) => {
            setLastFeature(event.feature);
        });

        return () => {
            map.removeInteraction(drawInteraction);
        };
    }, [map, drawType, source]);

    const handleMeasureClick = () => {
        if (!lastFeature) return;

        const geometry = lastFeature.getGeometry();
        let output = "";

        if (geometry instanceof Polygon) {
            const area = getArea(geometry);
            output = `Area: ${millify(area)} square meters`;
        } else if (geometry instanceof LineString) {
            const length = getLength(geometry);
            output = `Length: ${millify(length)} meters`;
        }

        setMeasurement(output);
    };


    useEffect(() => {
        if (!map || drawType === "None") return;

        const drawInteraction = new Draw({
            source,
            type: drawType,
            style: new Style({  // This styles both the cursor dot and preview line
                stroke: new Stroke({
                    color: '#c1a9f4',
                    width: 2
                }),
                fill: new Fill({
                    color: 'rgba(193, 169, 244, 0.1)'
                })
            })
        });

        map.addInteraction(drawInteraction);

        drawInteraction.on("drawend", (event) => {
            setLastFeature(event.feature);
        });

        return () => {
            map.removeInteraction(drawInteraction);
        };
    }, [map, drawType, source]);


    return (
        <>
            <div ref={mapRef} style={{ width: "100%", height: "300px" }}></div>
            <div>
                <select value={drawType} onChange={(e) => setDrawType(e.target.value)}>
                    <option value="LineString">LineString</option>
                    <option value="Point">Point</option>
                    <option value="Polygon">Polygon</option>
                </select>

                {drawType !== "Point" && (
                    <button onClick={handleMeasureClick}>
                        {drawType === "Polygon" ? "Measure Area" : "Measure Length"}
                    </button>
                )}

                {measurement && <p>{measurement}</p>}
            </div>
        </>
    );
};

export default MapComponent;
