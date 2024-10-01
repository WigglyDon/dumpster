#!/bin/bash

# Get the changed file from the arguments passed by nodemon
CHANGED_FILE=$1

# Check if the changed file is a TypeScript file
if [[ $CHANGED_FILE == *.ts ]]; then
  # Run the changed TypeScript file using ts-node
  ts-node $CHANGED_FILE
fi