//
//  MainWindowController.swift
//  RGBWell
//
//  Created by chendong on 2023/1/22.
//

import Cocoa

class MainWindowController: NSWindowController {
    @IBOutlet weak var colorWell: NSColorWell!;
    @IBOutlet weak var redSlider: NSSlider!;
    @IBOutlet weak var greenSlider: NSSlider!;
    @IBOutlet weak var blueSlider: NSSlider!;
    
    var r: Float = 0.5
    var g: Float = 0.5
    var b: Float = 0.5
    
    override var windowNibName: NSNib.Name? {
        return "MainWindowController"
    }
    
    override func windowDidLoad() {
        self.redSlider.floatValue = self.r
        self.greenSlider.floatValue = self.g
        self.blueSlider.floatValue = self.b
        self.renderColor()
    }
    
    @IBAction func adjustRed(sender: NSSlider) {
        print("red: \(sender.floatValue)")
        self.r = sender.floatValue
        self.renderColor()
    }
    
    @IBAction func adjustGreen(sender: NSSlider) {
        print("green: \(sender.floatValue)")
        self.g = sender.floatValue
        self.renderColor()
    }
    
    @IBAction func adjustBlue(sender: NSSlider) {
        print("blue: \(sender.floatValue)")
        self.b = sender.floatValue
        self.renderColor()
    }
    
    func renderColor() {
        self.colorWell.color = NSColor(
            red: CGFloat(self.r),
            green: CGFloat(self.g),
            blue: CGFloat(self.b),
            alpha: 1.0
        )
    }
}
