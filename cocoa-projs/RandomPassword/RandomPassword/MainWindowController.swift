//
//  MainWindowController.swift
//  RandomPassword
//
//  Created by chendong on 2023/1/21.
//

import Cocoa

class MainWindowController: NSWindowController {
    @IBOutlet weak var textField: NSTextField!
    @IBOutlet weak var button: NSButton!
    
    override var windowNibName: String? {
        return "MainWindowController";
    }
    
    override func windowDidLoad() {
        super.windowDidLoad()
        print("window loaded from NIB named \(windowNibName)")
        self.button.action = #selector(MainWindowController.generatePassword)
    }
    
    deinit {
        print("\(self) will be deallocated")
    }
    
    @IBAction func generatePassword(sender: AnyObject) {
        let length = 8;
        let password = generateRandomString(length: length);
        textField.stringValue = password;
    }
}
