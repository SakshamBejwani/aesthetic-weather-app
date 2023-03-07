import React from 'react'

function Stats() {
  return (
    <div class="custom-stats text-white py-5 px-4">
        <div class="w-100 d-flex align-items-center justify-content-between">
            <div class="location-details ">
                <h4 class="city fw-bold">Bangalore</h4>
                <div class="sub-text">Karnataka, India</div>
            </div>
            <h5 class="time fw-bold">
                8:50PM
            </h5>
        </div>
        <div class="detail-stats mt-5">
            <div class="weather-icon">
                Cloudy
            </div>
            <div class="d-flex align-items-center justify-content-between my-3">
                <div class="detail-temp">
                    <h1 class="temp">20° C</h1>
                </div>
                <div class="temp-desc">
                    Dramatic Cloudy
                </div>
            </div>
            
        </div>
        <hr/>

        <div class="forecast">
            Forecast
        </div>

        <div class="astronomy d-flex flex-column align-items-center justify-content-center">
            <div class="astronomy-container my-2 rounded px-3 py-4">
                Sunrise
            </div>
            <div class="astronomy-container my-2 rounded px-3 py-4">
                Sunset
            </div>
        </div>
    </div>
  )
}

export default Stats