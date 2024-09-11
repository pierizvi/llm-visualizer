from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import GPT2Tokenizer, GPT2Model
import torch

app = Flask(__name__)
CORS(app)  # Enable CORS

tokenizer = GPT2Tokenizer.from_pretrained('gpt2')
model = GPT2Model.from_pretrained('gpt2', output_attentions=True, output_hidden_states=True)

@app.route('/process', methods=['POST'])
def process_prompt():
    data = request.json
    prompt = data['prompt']
    inputs = tokenizer(prompt, return_tensors='pt')
    outputs = model(**inputs)

    tokens = tokenizer.convert_ids_to_tokens(inputs['input_ids'][0])
    attention = outputs.attentions[-1][0].detach().numpy().tolist()
    activations = [layer[0].detach().numpy().tolist() for layer in outputs.hidden_states]

    return jsonify({
        'tokens': tokens,
        'attention': attention,
        'activations': activations,
    })

if __name__ == '__main__':
    app.run(debug=True)