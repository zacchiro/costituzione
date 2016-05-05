markdowns = $(wildcard *.md)
htmls = $(patsubst %.md,%.html,$(markdowns))

all: $(htmls)

%.html: %.md
	markdown $< > $@

clean:
	rm -f $(htmls)
