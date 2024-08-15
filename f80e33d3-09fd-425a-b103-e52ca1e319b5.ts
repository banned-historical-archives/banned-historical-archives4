export default {
  "entity": {
    "id": "f80e33d3-09fd-425a-b103-e52ca1e319b5",
    "name": "汪东兴回忆——毛泽东与林彪反革命集团的斗争",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "汪东兴",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/f80e33d3-09fd-425a-b103-e52ca1e319b5.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "汪东兴回忆——毛泽东与林彪反革命集团的斗争",
        "authors": [
          "汪东兴"
        ],
        "page_start": 5,
        "page_end": 191,
        "dates": [
          {
            "year": 2010,
            "month": 1
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
  "path": "f80e33d3-09fd-425a-b103-e52ca1e319b5.pdf",
  "resource_type": "book",
  "version": 2
}