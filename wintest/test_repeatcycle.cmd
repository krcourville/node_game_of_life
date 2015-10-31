@echo off
echo ** INPUT **
type bigger_test.txt

echo ** OUTPUT **
type bigger_test.txt | node ../src/repeatcycle.js
