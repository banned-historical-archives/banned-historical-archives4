export default {
  "entity": {
    "id": "d3596f4c-5709-4089-83f7-1701350fc8ae",
    "name": "毛泽东年谱（第四卷）（1949_10-1952_12）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/d3596f4c-5709-4089-83f7-1701350fc8ae.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第四卷）（1949_10-1952_12）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 6,
        "page_end": 653,
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
  "path": "d3596f4c-5709-4089-83f7-1701350fc8ae.pdf",
  "resource_type": "book",
  "version": 2
}