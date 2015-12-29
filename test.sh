#!/usr/bin/env bash
if  curl -f https://pawelbooks-test.herokuapp.com/stock; then
    exit 1
fi
