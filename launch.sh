#!/bin/bash

# Function to handle cleanup on script exit
cleanup() {
    echo "Stopping all processes..."
    kill $(jobs -p)
    exit 0
}

# Trap SIGINT (Ctrl+C) and call cleanup function
trap cleanup SIGINT

# Start PHP server and vite
php artisan serve &
npm run dev &

# Wait for all background processes to finish
wait
