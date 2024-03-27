const WeatherCard=({label,data})=>{
    return <div className="weather-card">
        <div>{label}</div>
        <div>{data}</div>
    </div>
}

export default WeatherCard