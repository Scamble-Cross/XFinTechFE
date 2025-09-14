import { useEffect, useRef } from "react";
import { TradingViewContainer } from "./styled";

const TradingViewWidget = () => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "allow_symbol_change": true,
          "calendar": false,
          "details": false,
          "hide_side_toolbar": true,
          "hide_top_toolbar": false,
          "hide_legend": false,
          "hide_volume": false,
          "hotlist": false,
          "interval": "D",
          "locale": "en",
          "style": "1",
          "symbol": "FX:EURUSD",
          "theme": "light",
          "timezone": "Etc/UTC",
          "backgroundColor": "#fff",
          "gridColor": "rgba(198, 198, 198, 0.1)",
          "watchlist": [],
          "withdateranges": false,
          "compareSymbols": [],
          "studies": [],
          "autosize": true
        }`;
    container.current.appendChild(script);
  }, []);

  return (
    <TradingViewContainer>
      <div className="tradingview-widget-container" ref={container}></div>
    </TradingViewContainer>
  );
};

export default TradingViewWidget;
