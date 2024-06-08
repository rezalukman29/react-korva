/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";
import { Stage, Rect, Layer, Star, Text } from "react-konva";

function generateShapes() {
  return [...Array(2)].map((_, i) => ({
    id: i === 1 ? 'Table B' : 'Table C',
    x: Math.random() * 500,
    y: Math.random() * 500,
    rotation: Math.random() * 180,
    isDragging: false,
  }));
}

const INITIAL_STATE = generateShapes();

export default function Home() {
  const [stars, setStars] = React.useState(INITIAL_STATE);

  const handleDragStart = (e: any) => {
    const id = e.target.id();
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: star.id === id,
        };
      })
    );
  };
  const handleDragEnd = (e: any) => {
    setStars(
      stars.map((star) => {
        return {
          ...star,
          isDragging: false,
        };
      })
    );
  };
const onChoose = (id: string) => {
  console.log(id)
  setTimeout(function () {
    window.postMessage(`Select ${id}`, "*");
}, 0) 
}
  return (
    // <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
    <div className="flex w-[500px] h-[500px] bg-white flex-col">
      <img
        alt="map"
        style={{ position: "absolute" }}
        src={
          "https://cxapp.com/hs-fs/hubfs/Imported_Blog_Media/blog-image-indoor-mapping-engine.png?width=760&height=550&name=blog-image-indoor-mapping-engine.png"
        }
        className="w-[500px] h-[500px] object-cover"
      />
      <Stage width={500} height={500} className="z-50">
        <Layer>
          {stars.map((star) => (
            <Rect
              key={star.id}
              id={star.id}
              x={star.x}
              y={star.y}
              draggable
              // rotation={star.rotation}
              width={50}
              height={50}
              fill="red"
              shadowBlur={10}
              onClick={() => onChoose(star.id)}
              shadowOffsetX={star.isDragging ? 10 : 5}
              shadowOffsetY={star.isDragging ? 10 : 5}
              scaleX={star.isDragging ? 1.2 : 1}
              scaleY={star.isDragging ? 1.2 : 1}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
            />
            // <Star
            //   onClick={() => console.log("sipp")}
            //   key={star.id}
            //   id={star.id}
            //   x={star.x}
            //   y={star.y}
            //   numPoints={5}
            //   innerRadius={20}
            //   outerRadius={40}
            //   fill="#89b717"
            //   opacity={0.8}
            //   draggable
            //   rotation={star.rotation}
            //   shadowColor="black"
            //   shadowBlur={10}
            //   shadowOpacity={0.6}
            //   shadowOffsetX={star.isDragging ? 10 : 5}
            //   shadowOffsetY={star.isDragging ? 10 : 5}
            //   scaleX={star.isDragging ? 1.2 : 1}
            //   scaleY={star.isDragging ? 1.2 : 1}
            //   onDragStart={handleDragStart}
            //   onDragEnd={handleDragEnd}
            // />
          ))}
          <Rect
            x={20}
            y={50}
            width={50}
            height={50}
            fill="red"
            shadowBlur={10}
            onClick={() => onChoose('Table Server')}
          />
          <Text x={25} y={60} text="Table 1" />
        </Layer>
      </Stage>
    </div>
  );
}
