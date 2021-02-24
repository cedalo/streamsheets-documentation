# FILES=**/*.rst
FILES=$(find . -name "*.rst")
ARRAY=(
	drawstreamchart
	events
	daverage
	dcount
	dmas
	dmin
	dsum
	index
	match
	offset
	vlookup
	sum
	opcuavariables
	attributes
	bar
	classifypoint
	drawbezier
	drawbutton
	drawcheckbox
	drawelipse
	drawknob
	drawlabel
	drawline
	drawpolygon
	drawrectangle
	drawslider
	lineformat
	stackadd
	stackdrop
	stackfind
	stackrotate
	stacksort
	stackupsert
	count
	filewrite
	httprequest
	httprespond
	opcuavariables
	opcuawrite
	mailsend
	produce
	restrequest
	restrespond
	array
	copyvalues
	dictionary
	execute
	feedinbox
	jsonrange
	movevalues
	outboxdata
	read
	subtree
	swapvallues
	webpage
	write
	text
)

# for a in "${ARRAY[@]}"
# do
# 	echo $a
# 	# if [ $a == $filenameOnly ]; then
# 	# 	echo "found $a"
# 	# fi;
# done;

for f in $FILES
do
  filename="${f%.*}"
  filenameClear="${filename:2}"
  directory=${filename%/*}
  mkdir -p "./markdown/${directory:2}"
  filenameOnly="${filename##*/}"
  for a in "${ARRAY[@]}"
  do
	if [ $a == $filenameOnly ]; then
  		mkdir -p "./markdown2/${directory:2}"
		echo "Converting $f to ./markdown2/$filenameClear.md"
		`pandoc $f -f rst -t gfm -o ./markdown2/$filenameClear.md`
	fi;
  done;
  # echo "Converting $f to ./markdown/$filenameClear.md"
  # `pandoc $f -f rst -t gfm -o ./markdown/$filenameClear.md`
  # `pandoc $f -f rst -t gfm -o ./markdown/$filenameClear.md`
  # `pandoc $f -f rst -t markdown -o ./markdown/$filenameClear.md`
done