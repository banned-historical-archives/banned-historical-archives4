export default {
  "entity": {
    "id": "69d33dd6-4af3-48e0-9f23-1bf47e8fd466",
    "name": "“文革”御笔沉浮录——“梁效”往事",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "范达人",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/69d33dd6-4af3-48e0-9f23-1bf47e8fd466.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "“文革”御笔沉浮录——“梁效”往事",
        "authors": [
          "范达人"
        ],
        "page_start": 4,
        "page_end": 253,
        "dates": [
          {
            "year": 1999,
            "month": 5
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
  "path": "69d33dd6-4af3-48e0-9f23-1bf47e8fd466.pdf",
  "resource_type": "book",
  "version": 2
}