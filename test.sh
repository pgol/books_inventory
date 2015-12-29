#!/usr/bin/env bash
if ! curl -f https://pawelbooks.herokuapp.com/stock; then
    exit 0
fi
