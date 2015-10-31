@echo off
echo ** INPUT **
type test.txt

echo ** OUTPUT **
type test.txt | node ../src/cycle.js
