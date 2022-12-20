#!/bin/bash 

function usage()
{
	echo "$0 requires 1 argument"
}

if [[ $1 == "" ]]; then
	echo "ERROR! YOU MUST INCLUDE AN ARG"
	usage
else 
	echo $1
fi
