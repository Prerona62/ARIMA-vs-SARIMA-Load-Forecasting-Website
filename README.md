# ARIMA-vs-SARIMA-Load-Forecasting-Website
# Load Forecasting & Real-Time Energy Monitoring Website

This project combines **IoT + Cloud + Machine Learning** to monitor and predict the energy consumption of a small commercial load (like an incandescent light bulb).  

# How It Works!
1.PZEM-004T Sensor: Measures Voltage, Current, Power, and Energy consumption.  
2.NodeMCU ESP8266: A Wi-Fi enabled microcontroller that transmits sensor data to the cloud.  
3.Google Firebase:Stores and monitors real-time data for instant access.  
4.Web Dashboard: Displays live energy metrics and visualizations of consumption.  

Forecasting Future Load
We applied time-series models to predict future energy consumption:

# Data Considered:
  - Historical load readings  
  - Environmental factors (temperature, humidity, time of day, holidays, etc.)
  - 
# Models Used: 
 1. ARIMA 
  - Great for trend-based predictions  
  - Struggles with seasonal patterns → useful in limited electricity forecasting cases  
 2. SARIMA 
  - Captures both trend & seasonality  
  -  Requires larger datasets & careful tuning  
  -  More suitable for grid / residential / commercial load forecasting  


# Results
- The website allows you to **compare actual vs predicted load consumption**.  
- You can clearly see how different models (ARIMA vs SARIMA) behave with the data.  



# Live Demo
Check out the project in action here:  
👉 [**Live Website**](https://your-username.github.io/my-website/)  



# Tech Stack
- Hardware: PZEM-004T Sensor, NodeMCU ESP8266  
- Cloud: Google Firebase  
- Frontend: HTML, CSS, JavaScript  
- Machine Learning Models: ARIMA, SARIMA  


# Key Highlights
- Real-time energy monitoring  
- Cloud-based data storage & dashboard  
- Forecasting electricity consumption with ML  
- Clear comparison between ARIMA and SARIMA models  


✨ This project blends **IoT hardware, cloud storage, and time-series forecasting** into one practical solution for energy management in commercial facilities.  

