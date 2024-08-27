export default {
  "entity": {
    "id": "435f6586-a431-4591-8766-25b4aec31d2e",
    "name": "毛泽东年谱（第六卷）（1956_10-1959_3）",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "中共中央党史和文献研究院",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/435f6586-a431-4591-8766-25b4aec31d2e.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛泽东年谱（第六卷）（1956_10-1959_3）",
        "authors": [
          "中共中央党史和文献研究院"
        ],
        "page_start": 6,
        "page_end": 664,
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
  "path": "435f6586-a431-4591-8766-25b4aec31d2e.pdf",
  "resource_type": "book",
  "version": 2
}