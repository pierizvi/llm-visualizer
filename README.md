# LLM Visualizer

LLM Visualizer is a web-based tool that visualizes the internal attention mechanisms of large language models (LLMs). This interactive interface allows users to explore how transformer models process and focus on different tokens during inference.

## Features

- **Attention Head Visualization**: Explore how each attention head operates across layers.
- **Token Interactions**: Visualize the attention distribution between different input tokens.
- **Layer-wise Exploration**: Analyze attention patterns at each layer of the transformer.
- **Custom Models**: Supports custom transformer models using Hugging Face’s `transformers` library.

## Installation

To install and run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/pierizvi/llm-visualizer.git
   cd llm-visualizer
   ```

2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # For Linux/macOS
   venv\Scripts\activate  # For Windows
   ```

3. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```
   ```bas

5. Access the application by navigating to:
   ```bash
   npm start
   ```

## Usage

1. **Load a Pre-trained Model**: Select any Hugging Face transformer model or load your own fine-tuned model.
2. **Input Text**: Enter a sentence or a passage to visualize the attention heads and layers for each token.
3. **Interactive Exploration**: Click through layers and heads to explore attention patterns and token dependencies.

## Project Structure

- **`app.py`**: Flask-based web server for running the application.
- **`static/`**: Frontend assets such as JavaScript, CSS, and images.
- **`templates/`**: HTML templates for the web interface.
- **`visualization.py`**: Core logic for handling model inference and generating visualizations.
- **`models/`**: Code related to loading and processing transformer models.

## Dependencies

- Python 3.7+
- Flask
- Hugging Face `transformers`
- Matplotlib
- Plotly

To install additional dependencies:
```bash
pip install transformers flask torch matplotlib plotly
```

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests to enhance the project.

## License

This project is licensed under the MIT License.
