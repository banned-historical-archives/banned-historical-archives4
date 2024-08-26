export default {
  "entity": {
    "id": "f676a11c-1e35-4dff-ae44-f6d50cdf1bf3",
    "name": "毛泽东年谱（第二卷）（1937_7-1945_8）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/f676a11c-1e35-4dff-ae44-f6d50cdf1bf3.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第二卷）（1937_7-1945_8）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 5,
        "page_end": 624,
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
  "path": "f676a11c-1e35-4dff-ae44-f6d50cdf1bf3.pdf",
  "resource_type": "book",
  "version": 2
}