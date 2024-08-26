export default {
  "entity": {
    "id": "0e22c0a1-9e65-4dcc-aa69-a88402aaab1c",
    "name": "毛泽东年谱（第三卷）（1945_8-1949_9）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/0e22c0a1-9e65-4dcc-aa69-a88402aaab1c.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第三卷）（1945_8-1949_9）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 6,
        "page_end": 587,
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
  "path": "0e22c0a1-9e65-4dcc-aa69-a88402aaab1c.pdf",
  "resource_type": "book",
  "version": 2
}