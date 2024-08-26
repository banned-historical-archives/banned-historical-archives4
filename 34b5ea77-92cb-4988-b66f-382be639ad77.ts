export default {
  "entity": {
    "id": "34b5ea77-92cb-4988-b66f-382be639ad77",
    "name": "毛泽东年谱（第五卷）（1953_1-1956_9）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/34b5ea77-92cb-4988-b66f-382be639ad77.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第五卷）（1953_1-1956_9）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 6,
        "page_end": 648,
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
  "path": "34b5ea77-92cb-4988-b66f-382be639ad77.pdf",
  "resource_type": "book",
  "version": 2
}