#!/usr/bin/perl
use strict;
use warnings;
use File::Spec;

# Configuration
my %EXCLUDE_DIRS  = map { $_ => 1 } qw(.git .github __pycache__);
my %EXCLUDE_FILES = map { $_ => 1 } qw(index.html style.css AI_instructions.MD generate_index.py);
my $OUTPUT_FILE   = 'index.html';

sub generate_html {
    my @html = (
        "<!DOCTYPE html>",
        "<html lang='en'>",
        "<head>",
        "    <meta charset='UTF-8'>",
        "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>",
        "    <title>Sanskrit Kavyas Parsed</title>",
        "    <link rel='stylesheet' href='style.css'>",
        "    <style>",
        "        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; padding: 20px; background-color: #f4f7f6; color: #2c3e50; }",
        "        .container { max-width: 900px; margin: auto; background: white; padding: 30px; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }",
        "        h1 { border-bottom: 2px solid #3498db; padding-bottom: 10px; color: #2980b9; }",
        "        details { margin-bottom: 8px; border: 1px solid #e1e4e8; border-radius: 6px; overflow: hidden; }",
        "        summary { padding: 12px; background: #f8f9fa; cursor: pointer; font-weight: 600; list-style: none; display: flex; align-items: center; transition: background 0.2s; }",
        "        summary:hover { background: #edf2f7; }",
        "        summary::before { content: '\\25B6'; margin-right: 12px; font-size: 0.8em; color: #7f8c8d; transition: transform 0.2s; }",
        "        details[open] summary::before { transform: rotate(90deg); }",
        "        ul { list-style: none; padding: 10px 0 10px 40px; margin: 0; background: #fff; }",
        "        li { margin: 6px 0; }",
        "        a { text-decoration: none; color: #34495e; font-size: 0.95em; }",
        "        a:hover { color: #3498db; text-decoration: underline; }",
        "        .count { margin-left: auto; font-size: 0.8em; color: #95a5a6; font-weight: normal; }",
        "    </style>",
        "</head>",
        "<body>",
        "<div class='container'>",
        "    <h1>Sanskrit Kavyas Parsed</h1>",
        "    <p>Explore the collection below. Click a category to expand.</p>",
    );

    opendir(my $dh, '.') or die "Cannot open current directory: $!";
    my @items = sort grep { !$EXCLUDE_DIRS{$_} && -d $_ } readdir($dh);
    closedir($dh);

    for my $item (@items) {
        opendir(my $idh, $item) or next;
        my @files = sort grep { /\.html$/ } readdir($idh);
        closedir($idh);

        next unless @files;

        my $count = scalar @files;
        push @html, "    <details>";
        push @html, "        <summary>$item <span class='count'>$count files</span></summary>";
        push @html, "        <ul>";

        for my $file (@files) {
            my $file_path = "$item/$file";
            push @html, "            <li><a href='$file_path'>&#x1F4C4; $file</a></li>";
        }

        push @html, "        </ul>";
        push @html, "    </details>";
    }

    push @html, "</div>";
    push @html, "</body>";
    push @html, "</html>";

    open(my $fh, '>:encoding(UTF-8)', $OUTPUT_FILE)
        or die "Cannot open $OUTPUT_FILE for writing: $!";
    print $fh join("\n", @html) . "\n";
    close($fh);

    print "Successfully generated $OUTPUT_FILE\n";
}

generate_html();