from PIL import Image, ImageDraw, ImageFont

text = ".jp"
savefolder = "./"

# font params
fontsize = 200
fontname = "C:\\Windows\\Fonts\\arialbd.ttf"

# canvas params
canvas_size = (256, 256)
background_rgba = (0, 255, 255, 0)
text_rgba = (0, 0, 0, 0)

img = Image.new('RGBA', canvas_size, background_rgba)
draw = ImageDraw.Draw(img)

font = ImageFont.truetype(fontname, fontsize)
text_width = draw.textlength(text, font=font)
text_height = fontsize
draw_topleft = ((canvas_size[0] / text_width) / 2, (canvas_size[1] - text_height) / 2)
draw.text(draw_topleft, text, fill=text_rgba, font=font)

img.save(f"{savefolder}favicon.ico")
