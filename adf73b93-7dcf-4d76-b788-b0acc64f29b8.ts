export default {
  "entity": {
    "id": "adf73b93-7dcf-4d76-b788-b0acc64f29b8",
    "name": "毛泽东年谱（第一卷）（1893_12-1937_06）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/adf73b93-7dcf-4d76-b788-b0acc64f29b8.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第一卷）（1893_12-1937_06）",
        "authors": [
          "中共中央党史和研究院"
        ],
        "page_start": 12,
        "page_end": 698,
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
  "path": "adf73b93-7dcf-4d76-b788-b0acc64f29b8.pdf",
  "resource_type": "book",
  "version": 2
}