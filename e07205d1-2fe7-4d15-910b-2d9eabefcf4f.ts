export default {
  "entity": {
    "id": "e07205d1-2fe7-4d15-910b-2d9eabefcf4f",
    "name": "毛泽东年谱（第九卷）（1966_10-1976_9）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/e07205d1-2fe7-4d15-910b-2d9eabefcf4f.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第九卷）（1966_10-1976_9）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 6,
        "page_end": 666,
        "dates": [
          {
            "year": 2023,
            "month": 12
          }
        ]
      }
    ],
    "ocr": {
      "extract_text_from_pdf": false,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "e07205d1-2fe7-4d15-910b-2d9eabefcf4f.pdf",
  "resource_type": "book",
  "version": 2
}