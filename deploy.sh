#!/bin/env bash
npm version $1 && \
git push -u test2 master
