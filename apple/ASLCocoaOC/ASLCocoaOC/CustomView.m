//
//  CustomView.m
//  ASLCocoaOC
//
//  Created by chendong on 2023/2/3.
//

#import "CustomView.h"

@implementation CustomView

-(void)drawRect:(NSRect)dirtyRect {
    NSBezierPath *path = [NSBezierPath bezierPathWithRect:self.bounds];
    [[NSColor greenColor] setFill];
    [path fill];
}

@end
