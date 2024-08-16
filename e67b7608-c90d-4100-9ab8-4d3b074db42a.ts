export default {
  "entity": {
    "id": "e67b7608-c90d-4100-9ab8-4d3b074db42a",
    "name": "毛主席语录的诞生及其他——唐平铸文革实录",
    "internal": false,
    "type": "pdf",
    "official": false,
    "author": "唐炎明 唐亚明",
    "files": "https://raw.githubusercontent.com/banned-historical-archives/banned-historical-archives4/main/e67b7608-c90d-4100-9ab8-4d3b074db42a.pdf"
  },
  "parser_option": {
    "articles": [
      {
        "title": "毛主席语录的诞生及其他——唐平铸文革实录",
        "authors": [
          "唐炎明",
          "唐亚明"
        ],
        "page_start": 7,
        "page_end": 461,
        "dates": [
          {
            "year": 2019
          }
        ]
      }
    ],
    "ocr": {
      "extract_text_from_pdf": true,
      "use_onnx": true,
      "det_model_dir": "./paddle/onnx/ch_PP-OCRv4_det_infer.onnx",
      "rec_model_dir": "./paddle/onnx/ch_PP-OCRv4_rec_infer.onnx"
    }
  },
  "parser_id": "automation",
  "path": "e67b7608-c90d-4100-9ab8-4d3b074db42a.pdf",
  "resource_type": "book",
  "version": 2
}