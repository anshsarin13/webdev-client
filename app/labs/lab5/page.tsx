"use client";
import "@/app/labs/lab2/tailwind/utilities.css";
import Environment from "./Environment";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import WorkingWithRemoteObjects from "./WorkingWithRemoteObjects";
import WorkingWithRemoteArrays from "./WorkingWithRemoteArrays";
import HttpClient from "./HttpClient";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import HelloRoute from "./HelloRoute";
import CalculatorRoute from "./CalculatorRoute";

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <Environment />
      <PathParameters />
      <QueryParameters />
      <WorkingWithRemoteObjects />
      <WorkingWithRemoteArrays />
      <HttpClient />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
      <HelloRoute />
      <CalculatorRoute />
    </div>
  );
}
