import React from 'react';

const DEFAULT_JSON = {
  width: 1080,
  height: 1080,
  fonts: [],
  pages: [
    {
      id: 'w76qNOu-sr',
      children: [
        {
          id: 'voQ9zYqhvt',
          type: 'image',
          x: 0,
          y: 0,
          rotation: 0,
          opacity: 1,
          visible: true,
          locked: false,
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          shadowEnabled: false,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'black',
          selectable: true,
          alwaysOnTop: false,
          showInExport: true,
          width: 1080,
          height: 1080,
          src: 'https://images.unsplash.com/photo-1525268771113-32d9e9021a97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTY5OTZ8MHwxfHNlYXJjaHwyfHxwYXN0ZWwlMjBiYWxsb29ufGVufDB8fHx8MTYzMDk5ODE4OQ&ixlib=rb-1.2.1&q=80&w=1080',
          cropX: 0,
          cropY: 0,
          cropWidth: 1,
          cropHeight: 1,
          cornerRadius: 0,
          flipX: false,
          flipY: false,
          clipSrc: '',
          borderColor: 'black',
          borderSize: 0,
        },
        {
          id: '_UpqKWLYBM',
          type: 'text',
          x: 189.1818723754583,
          y: 129.75903614457823,
          rotation: 0,
          opacity: 1,
          visible: true,
          locked: false,
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          shadowEnabled: false,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'black',
          selectable: true,
          alwaysOnTop: false,
          showInExport: true,
          text: 'Birthday',
          placeholder: '',
          fontSize: 250,
          fontFamily: 'Cookie',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'center',
          width: 736.0987892604895,
          height: 300,
          strokeWidth: 0,
          stroke: 'black',
          lineHeight: 1.2,
          letterSpacing: 0,
        },
        {
          id: 'nAzzW9iZFy',
          type: 'text',
          x: 269.9999999899999,
          y: 46.899390591100996,
          rotation: 0,
          opacity: 1,
          visible: true,
          locked: false,
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          shadowEnabled: false,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'black',
          selectable: true,
          alwaysOnTop: false,
          showInExport: true,
          text: 'HAPPY',
          placeholder: '',
          fontSize: 80,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'center',
          width: 540,
          height: 96,
          strokeWidth: 0,
          stroke: 'black',
          lineHeight: 1.2,
          letterSpacing: 0,
        },
        {
          id: 'v-QGa2tA1V',
          type: 'text',
          x: 287.2312670057029,
          y: 429.7590361445782,
          rotation: 0,
          opacity: 1,
          visible: true,
          locked: false,
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          shadowEnabled: false,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'black',
          selectable: true,
          alwaysOnTop: false,
          showInExport: true,
          text: 'TO YOU',
          placeholder: '',
          fontSize: 80,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'center',
          width: 540,
          height: 96,
          strokeWidth: 0,
          stroke: 'black',
          lineHeight: 1.2,
          letterSpacing: 0,
        },
        {
          id: 'Z40u2lixXW',
          type: 'text',
          x: 125.99999999999994,
          y: 690.3979211431999,
          rotation: 0,
          opacity: 1,
          visible: true,
          locked: false,
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          shadowEnabled: false,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'black',
          selectable: true,
          alwaysOnTop: false,
          showInExport: true,
          text: 'NAME',
          placeholder: '',
          fontSize: 184,
          fontFamily: 'Alata',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'center',
          width: 828,
          height: 220.79999999999998,
          strokeWidth: 0,
          stroke: 'black',
          lineHeight: 1.2,
          letterSpacing: 0,
        },
      ],
      background: 'white',
    },
  ],
};

const CloudRenderDemo = () => {
  const [pixelRatio, setPixelRatio] = React.useState(1);
  return (
    <div>
      <h4>Template JSON (result of store.toJSON() export):</h4>
      <textarea
        rows="10"
        id="input"
        style={{ width: '100%' }}
        defaultValue={JSON.stringify(DEFAULT_JSON, null, 2)}
      ></textarea>
      <h4>Options:</h4>
      <div>
        Pixel ratio:{' '}
        <input
          type="range"
          id="quality"
          min="0.1"
          max="4"
          step="0.1"
          value={pixelRatio}
          onChange={(e) => {
            setPixelRatio(parseFloat(e.target.value));
          }}
        />{' '}
        {pixelRatio}
      </div>
      <input value="Anton,Olga,Mark,Lavr" id="names" />
      <p>
        <button id="generate-button">Generate birthday cards</button>
      </p>
      <div id="images-container"></div>
    </div>
  );
};

export default CloudRenderDemo;