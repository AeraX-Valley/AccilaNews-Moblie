declare module '@maptiler/sdk' {
    // ประกาศชนิดของโมดูลที่ใช้
    const Map: any; // หรือจะประกาศชนิดให้ตรงกับโมดูลจริงก็ได้
    const config: any;
    
    // ประกาศชนิดของอื่น ๆ ที่คุณใช้ในโมดูล @maptiler/sdk
    // ตัวอย่าง:
    interface MapOptions {
      container: string;
      style: string;
      center: [number, number];
      zoom: number;
    }
  
    // ประกาศตัวแปรหรือค่าอื่น ๆ ที่คุณใช้ในโมดูล @maptiler/sdk
    // ตัวอย่าง:
    const MapStyle: {
      STREETS: string;
      SATELLITE: string;
      // เพิ่มตัวเลือกอื่น ๆ ตามที่ใช้งาน
    };
  
    // Export ชนิด, ตัวแปร, หรือค่าอื่น ๆ ตามที่คุณใช้งาน
    export { Map, config, MapOptions, MapStyle };
  }
  