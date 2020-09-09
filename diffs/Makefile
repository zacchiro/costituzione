all:

diffs = 2012-04-20-to-2016-01-20 2012-04-20-to-2019-10-12
markdowns = $(patsubst %,%.md,$(diffs))

2012-04-20-to-2016-01-20.md: ../2012-04-20/costituzione.md ../2016-01-20/costituzione.md
	PATH=../bin:$$PATH ../bin/diff-by-article $^ > $@
	../bin/remove-extra-wdiff-newlines $@ >temp && mv -f temp $@

2012-04-20-to-2019-10-12.md: ../2012-04-20/costituzione.md ../2019-10-12/costituzione.md
	PATH=../bin:$$PATH ../bin/diff-by-article $^ > $@
	../bin/remove-extra-wdiff-newlines $@ >temp && mv -f temp $@

clean: diff-clean
diff-clean:
	rm -f $(markdowns)

include ../make/Makefile.costituzione
