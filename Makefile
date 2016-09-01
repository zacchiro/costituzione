HTML_DIR = public_html

all:

publish: $(HTML_DIR)
	make -C diffs
	bin/publish
	cd $(HTML_DIR) && \
	  git add . && \
	  git commit -m 'publishing diffs (auto)' && \
	  git push

public_html:
	git clone --local . $(HTML_DIR)
	cd $(HTML_DIR) && \
	  git remote set-url origin $(shell git remote get-url origin) && \
	  git checkout gh-pages
