import React from 'react'

function Navbar() {
  return (
    <div class="navbar-custom">
      <div class="navbar-title">
        <div class="row py-5 px-5">
            <div class="col-3">
                Icon
            </div>
            <div class="col">
                Weather
            </div>
        </div>
      </div>
      <div class="navbar-nav py-5">
        <div class="row py-3 px-5">
                <div class="col-3">
                    Icon
                </div>
                <div class="col">
                    Saved Locations
                </div>
        </div>
        <div class="row py-3 px-5">
            <div class="col-3">
                Icon
            </div>
            <div class="col">
                Calendar
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
