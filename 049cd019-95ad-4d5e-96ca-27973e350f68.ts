export default {
  "entity": {
    "id": "049cd019-95ad-4d5e-96ca-27973e350f68",
    "name": "毛泽东年谱（第七卷）（1959_4-1961_6）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/049cd019-95ad-4d5e-96ca-27973e350f68.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第七卷）（1959_4-1961_6）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 6,
        "page_end": 614,
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
  "path": "049cd019-95ad-4d5e-96ca-27973e350f68.pdf",
  "resource_type": "book",
  "version": 2
}