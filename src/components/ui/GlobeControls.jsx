import React from 'react';
import styled from 'styled-components';

const ControlsContainer = styled.div`
  position: absolute;
  top: 100px;
  right: 20px;
  background: rgba(0, 0, 0, 0.8);
  padding: 1.5rem;
  border-radius: 12px;
  width: 300px;
  max-height: calc(100vh - 120px);
  overflow-y: auto;
  z-index: 1001;
  color: white;
  font-family: sans-serif;
`;

const ControlGroup = styled.div`
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #444;
  padding-bottom: 1.5rem;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }
`;

const GroupTitle = styled.h4`
  margin: 0 0 1rem 0;
  color: var(--accent-amber);
  font-size: 1rem;
`;

const ControlRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
`;

const Value = styled.span`
  font-weight: bold;
  min-width: 40px;
  text-align: right;
`;

const Slider = styled.input`
  width: 100%;
  margin-top: 0.5rem;
`;

const ColorInput = styled.input`
  width: 100%;
  height: 30px;
  padding: 0;
  border: none;
  background: none;
`;

const GlobeControls = ({ settings, onUpdate }) => {
  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    onUpdate({ ...settings, [name]: parseFloat(value) });
  };

  const handleColorChange = (e) => {
    onUpdate({ ...settings, [e.target.name]: e.target.value });
  };

  return (
    <ControlsContainer>
      <ControlGroup>
        <GroupTitle>Atmosphere</GroupTitle>
        <ControlRow>
          <Label>Glow Color</Label>
        </ControlRow>
        <ColorInput type="color" name="atmosphereGlowColor" value={settings.atmosphereGlowColor} onChange={handleColorChange} />
      </ControlGroup>

      <ControlGroup>
        <GroupTitle>Lighting</GroupTitle>
        <ControlRow>
          <Label>Ambient</Label>
          <Value>{settings.ambientIntensity.toFixed(2)}</Value>
        </ControlRow>
        <Slider type="range" name="ambientIntensity" min="0" max="5" step="0.1" value={settings.ambientIntensity} onChange={handleSliderChange} />
        <ControlRow>
          <Label>Directional</Label>
          <Value>{settings.directionalIntensity.toFixed(2)}</Value>
        </ControlRow>
        <Slider type="range" name="directionalIntensity" min="0" max="5" step="0.1" value={settings.directionalIntensity} onChange={handleSliderChange} />
      </ControlGroup>

      <ControlGroup>
        <GroupTitle>Earth Material</GroupTitle>
        <ControlRow>
          <Label>Metalness</Label>
          <Value>{settings.metalness.toFixed(2)}</Value>
        </ControlRow>
        <Slider type="range" name="metalness" min="0" max="1" step="0.01" value={settings.metalness} onChange={handleSliderChange} />
        <ControlRow>
          <Label>Roughness</Label>
          <Value>{settings.roughness.toFixed(2)}</Value>
        </ControlRow>
        <Slider type="range" name="roughness" min="0" max="1" step="0.01" value={settings.roughness} onChange={handleSliderChange} />
        <ControlRow>
          <Label>Night Glow</Label>
          <Value>{settings.emissiveIntensity.toFixed(2)}</Value>
        </ControlRow>
        <Slider type="range" name="emissiveIntensity" min="0" max="3" step="0.05" value={settings.emissiveIntensity} onChange={handleSliderChange} />
      </ControlGroup>

      <ControlGroup>
        <GroupTitle>Clouds</GroupTitle>
        <ControlRow>
          <Label>Opacity</Label>
          <Value>{settings.cloudsOpacity.toFixed(2)}</Value>
        </ControlRow>
        <Slider type="range" name="cloudsOpacity" min="0" max="1" step="0.01" value={settings.cloudsOpacity} onChange={handleSliderChange} />
      </ControlGroup>
    </ControlsContainer>
  );
};

export default GlobeControls;
