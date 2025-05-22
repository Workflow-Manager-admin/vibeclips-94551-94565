#!/bin/bash
cd /home/kavia/workspace/code-generation/vibeclips-94551-94565/main_container_for_vibeclips
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

