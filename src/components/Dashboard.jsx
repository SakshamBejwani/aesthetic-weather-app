import React from 'react'
import Overview from './Overview'

function Dashboard() {
  return (
    <div class="dashboard-container px-5 d-flex flex-column align-items-start justify-content-start">
        <div class="navbar-title w-100">
            <div class="row py-5 d-flex align-items-center justify-content-center">
                <div class="col">
                    <h3 class="month-bold fw-bold">
                        March 2023
                    </h3>
                    <div class="sub-text">
                        Tuesday, March 7, 2023
                    </div>
                </div>
                <div class="col">
                    <div class="searchbox d-flex align-items-center justify-content-center">
                        <div class="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                      
                        </div>
                        <input class="custom-input" placeholder='Search location here'/>
                    </div>
                </div>
                <div class="col">
                <div class="save-icon">
                    <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"></path>
                </svg>
                </div>
                    
                </div>
            </div>
        </div>
        <Overview/>
    </div>
  )
}

export default Dashboard
