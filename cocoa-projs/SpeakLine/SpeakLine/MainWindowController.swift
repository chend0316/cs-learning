//
//  MainWindowController.swift
//  SpeakLine
//
//  Created by chendong on 2023/1/24.
//

import Cocoa

class MainWindowController: NSWindowController, NSSpeechSynthesizerDelegate, NSWindowDelegate, NSTableViewDataSource, NSTableViewDelegate {
    @IBOutlet weak var textField: NSTextField!
    @IBOutlet weak var speakButton: NSButton!
    @IBOutlet weak var stopButton: NSButton!
    @IBOutlet weak var tableView: NSTableView!
    
    let voices = NSSpeechSynthesizer.availableVoices
    
    let speechSynthesizer = NSSpeechSynthesizer()
    
    var isSpeaking = false {
        didSet(value) {
            updateButtons()
        }
    }
    
    override var windowNibName: NSNib.Name? {
        return "MainWindowController"
    }

    override func windowDidLoad() {
        super.windowDidLoad()
        updateButtons()
        speechSynthesizer.delegate = self
        let defaultVoice = NSSpeechSynthesizer.defaultVoice
        
        if let index = voices.firstIndex(of: defaultVoice) {
            tableView.selectRowIndexes(IndexSet(integer: index), byExtendingSelection: false)
            tableView.scrollRowToVisible(index)
        }
    }
    
    @IBAction func speakIt(sender: NSButton) {
        NSLog("UI start speak")
        let text = textField.stringValue
        if text.isEmpty {
            NSLog("text is empty")
        } else {
            NSLog("system start speak")
            speechSynthesizer.startSpeaking(text)
            isSpeaking = true
        }
    }
    
    @IBAction func stopIt(sender: NSButton) {
        NSLog("UI stop speak")
        speechSynthesizer.stopSpeaking()
    }
    
    func speechSynthesizer(_ sender: NSSpeechSynthesizer, didFinishSpeaking: Bool) {
        if didFinishSpeaking {
            NSLog("finished speaking")
            isSpeaking = false
        }
    }
    
    func updateButtons() {
        speakButton.isEnabled = !isSpeaking
        stopButton.isEnabled = isSpeaking
    }
    
    func windowWillClose(_ notification: Notification) {
        speechSynthesizer.stopSpeaking()
    }
    
    func voiceNameForIdentifier(id: NSSpeechSynthesizer.VoiceName) -> String? {
        let attr = NSSpeechSynthesizer.attributes(forVoice: id)
        return attr[NSSpeechSynthesizer.VoiceAttributeKey.name] as? String
    }
    
    func numberOfRows(in tableView: NSTableView) -> Int {
        return voices.count
    }
    
    func tableView(_ tableView: NSTableView, objectValueFor tableColumn: NSTableColumn?, row: Int) -> Any? {
        return voiceNameForIdentifier(id: voices[row])
    }
    
    func tableViewSelectionDidChange(_ notification: Notification) {
        let row = tableView.selectedRow
        if row == -1 {
            NSLog("change voice to nil")
            speechSynthesizer.setVoice(nil)
            return
        }
        let voice = voices[row]
        NSLog("change voice to \(voice)")
        speechSynthesizer.setVoice(voice)
    }
}
