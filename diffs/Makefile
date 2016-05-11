all:

diffs = 2012-04-20-to-2016-01-20
markdowns = $(patsubst %,%.md,$(diffs))

2012-04-20-to-2016-01-20.md: ../2012-04-20/costituzione.md ../2016-01-20/costituzione.md
	../bin/wdiff $^ > $@

clean: diff-clean
diff-clean:
	rm -f $(markdowns)

include ../make/Makefile.costituzione
