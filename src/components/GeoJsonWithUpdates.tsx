import React, { ReactElement, useEffect, useRef } from 'react';
import { GeoJSON, GeoJSONProps } from 'react-leaflet';
import { GeoJSON as LeafletGeoJSON } from 'leaflet';

export default function GeoJsonWithUpdates(props: GeoJSONProps): ReactElement {
  const geoJsonLayerRef = useRef<LeafletGeoJSON | null>(null);

  useEffect(() => {
    const layer = geoJsonLayerRef.current;
    if (layer) {
      layer.clearLayers().addData(props.data);
    }
  }, [props.data, props.pathOptions, props.style]);

  return <GeoJSON {...props} ref={geoJsonLayerRef} />;
}
