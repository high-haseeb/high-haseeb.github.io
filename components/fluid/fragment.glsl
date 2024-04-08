#define CELL_SIZE 50.0

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec2 cell = resolution / CELL_SIZE;
    outputColor = vec4(floor(uv * cell) / cell, 0.5, 1.0);
}
