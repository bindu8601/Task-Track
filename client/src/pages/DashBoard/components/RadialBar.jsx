import React, { Component } from 'react'
import Chart from 'react-apexcharts'

const RadialBar = () => {
  let data = {
    options: {
      plotOptions: {
        radialBar: {
          // startAngle: -180,
          // endAngle: 180,

          track: {
            background: '#f2f2f2',
            strokeWidth: '97%',
          },
          dataLabels: {
            show: true,
            value: {
              show: false,
              fontSize: '16px',
            },
            total: {
              show: true,
              label: '49%',
              color: '#373d3f',
            },
          },
        },
      },
    },

    series: [49],
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <Chart
        options={data.options}
        series={data.series}
        type="radialBar"
        width={140}
        height={160}
      />
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginTop: '10px',
        }}
        className="ml-[25px]"
      >
        <span
          style={{
            display: 'inline-block',
            width: '10px',
            height: '10px',
            backgroundColor: 'green',
            borderRadius: '50%',
          }}
        ></span>
        <span className="text-[15px] font-[500]">Completed</span>
      </div>
    </div>
  )
}

export default RadialBar
