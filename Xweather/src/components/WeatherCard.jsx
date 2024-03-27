const WeatherCard=({label,data})=>{
    return <div className="weather-cards">
        <div>{label}</div>
        <div>{data}</div>
    </div>
}

export default WeatherCard