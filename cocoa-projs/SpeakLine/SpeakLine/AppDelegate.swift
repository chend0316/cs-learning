//
//  AppDelegate.swift
//  SpeakLine
//
//  Created by chendong on 2023/1/24.
//

import Cocoa

@main
// 1. instantiate the NSApplication and the AppDelegate;
// 2. set the NSApplication's delegate property to the AppDelegate
class AppDelegate: NSObject, NSApplicationDelegate {

    var mainWindowController: MainWindowController?

    func applicationDidFinishLaunching(_ aNotification: Notification) {
        let win = MainWindowController()
        win.showWindow(self)
        self.mainWindowController = win
    }

    func applicationWillTerminate(_ aNotification: Notification) {
    }

    func applicationSupportsSecureRestorableState(_ app: NSApplication) -> Bool {
        return true
    }
}

