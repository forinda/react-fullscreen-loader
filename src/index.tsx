import * as React from 'react';
// import  './loader.css'

interface LoaderProps {
  loading: boolean;
  loadingColor?: string;
  backgroundColor?: string;
}

export const LoaderComponent = ({
  loading,
  backgroundColor = 'rgba(236, 240, 241, 0.7)',
  loadingColor = '#e74c3c',
}: LoaderProps) => {
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  const loadingColorStyle = loadingColor
    ? { backgroundColor: loadingColor }
    : {};

  return loading ? (
    <div className="loading_background" style={backgroundColorStyle}>
      <div className="loading_bar">
        <div className="loading_circle_1" style={loadingColorStyle} />
        <div className="loading_circle_2" style={loadingColorStyle} />
      </div>
    </div>
  ) : null;
};
