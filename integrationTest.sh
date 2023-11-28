#!/bin/bash
echo v$(curl -s http://localhost:3000 | grep -o  '<p id="version" class="px-1">.*</p>' | awk -F ">" '{print $2}'| awk -F "<" '{print $1}')