import express, { Request, Response } from "express";
// const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Fly with me')
})

app.listen(1550)